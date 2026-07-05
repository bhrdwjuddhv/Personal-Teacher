import rateLimit from "express-rate-limit";

const WINDOW_MS = 20 * 60 * 60 * 1000;
const MAX_REQUESTS = 5;

const askAiLimiter = rateLimit({
    windowMs: WINDOW_MS,
    max: MAX_REQUESTS,
    standardHeaders: true,
    legacyHeaders: false,
    skipFailedRequests: false,
    handler: (req, res) => {
        const resetTime = req.rateLimit?.resetTime;
        const retryAfterSeconds = resetTime
            ? Math.max(0, Math.ceil((resetTime.getTime() - Date.now()) / 1000))
            : Math.ceil(WINDOW_MS / 1000);

        res.set("Retry-After", String(retryAfterSeconds));
        res.status(429).json({
            success: false,
            statusCode: 429,
            message: "Rate limit exceeded. Try again later.",
            retryAfterSeconds,
        });
    },
});

export { askAiLimiter };
