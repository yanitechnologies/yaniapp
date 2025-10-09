package main

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"net/smtp"
	"os"
	"os/signal"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/spf13/viper"
	"github.com/joho/godotenv"
)

func initConfig() {
	if err := godotenv.Load(); err != nil {
		log.Fatalf("Error loading .env file: %v", err)
	}

	viper.SetConfigFile(".env")
	viper.AutomaticEnv()

	if err := viper.ReadInConfig(); err != nil {
		log.Fatalf("Error reading .env file: %v", err)
	}
}
func sendEmail(
    to, // This is the dynamic recipient email address
    subject,
    fullName,
    userEmail,
    phoneNumber,
    courseSelected string,
) error {
    from := viper.GetString("SMTP_USER")
    password := viper.GetString("SMTP_PASS")
    smtpHost := viper.GetString("SMTP_HOST")
    smtpPort := viper.GetString("SMTP_PORT")

    auth := smtp.PlainAuth("", from, password, smtpHost)

    // Build the descriptive email body
    emailBody := fmt.Sprintf(
        "A new contact form submission has been received:\n\n"+
        "Full Name: %s\n"+
        "Email: %s\n"+
        "Phone Number: %s\n"+
        "Course Selected: %s\n",
        fullName, userEmail, phoneNumber, courseSelected,
    )

    // Construct the full message, including headers and the new body
    msg := []byte("To: " + to + "\r\n" +
        "Subject: " + subject + "\r\n" +
        "\r\n" +
        emailBody + "\r\n")

    address := fmt.Sprintf("%s:%s", smtpHost, smtpPort)
    return smtp.SendMail(address, auth, from, []string{to}, msg)
}

func main() {
	initConfig()

	gin.SetMode(gin.ReleaseMode)

	r := gin.New()
	r.Use(gin.Recovery())

	r.Static("/assets", "./dist/assets")
	r.StaticFile("/", "./dist/index.html")
	r.StaticFile("/favicon.ico", "./dist/favicon.ico")

	r.NoRoute(func(c *gin.Context) {
		c.File("./dist/index.html")
	})

	r.POST("/api/send-mail", func(c *gin.Context) {
    // ⚠️ Define your recipient email here or load it from config
		const recipientEmail = "hr.yanitechnologies@gmail.com" 

		var req struct {
			// Fields for the content/body
			Subject       string `json:"subject"`
			FullName      string `json:"full_name"`
			UserEmail     string `json:"user_email"`
			PhoneNumber   string `json:"phone_number"`
			CourseSelected string `json:"course_selected"`
		}

		if err := c.BindJSON(&req); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		// Pass the fixed recipientEmail to the function
		if err := sendEmail(
			recipientEmail, // The dynamic, non-request variable
			req.Subject,
			req.FullName,
			req.UserEmail,
			req.PhoneNumber,
			req.CourseSelected,
		); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}

		c.JSON(http.StatusOK, gin.H{"message": "Email sent!"})
	})

	srv := &http.Server{
		Addr:    fmt.Sprintf(":%s", viper.GetString("PORT")),
		Handler: r,
	}

	go func() {
		log.Printf("Server running on http://localhost:%s/", viper.GetString("PORT"))
		if err := srv.ListenAndServe(); err != nil && err != http.ErrServerClosed {
			log.Fatalf("ListenAndServe() failed: %v", err)
		}
	}()

	quit := make(chan os.Signal, 1)
	signal.Notify(quit, os.Interrupt)
	<-quit

	log.Println("Shutdown signal received")
	ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
	defer cancel()
	if err := srv.Shutdown(ctx); err != nil {
		log.Fatalf("Server forced to shutdown: %v", err)
	}
	log.Println("Server exiting")
}
