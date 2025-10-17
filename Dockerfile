# ========== Final image (use multi-stage ideally) ==========
FROM alpine:latest

# If your Go binary makes HTTPS calls, you need CA certs
RUN apk add --no-cache ca-certificates

# (Optional) If you need any additional libraries, you can install them here
# e.g. RUN apk add --no-cache tzdata

# Create non-root user (optional, for security)
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

# Copy the Go server binary (already built)
COPY server ./server

# Ensure it is executable (sometimes permissions get lost)
RUN chmod +x server

# Copy the built frontend static files
COPY dist ./dist

# Copy environment file if needed (but see note below)
COPY .env .env

# Expose the port your server listens on
EXPOSE 8080

# Use non-root user
USER appuser

# Set any environment variables (optional defaults)
ENV PORT=8080

# Run the server binary
CMD ["./server"]
