import reflex as rx

class PysiteConfig(rx.Config):
    pass

config = PysiteConfig(
    app_name="pysite",
    env=rx.Env.DEV,
    frontend_port="7443",
    backend_port="7444",
    loglevel="debug",
    styleshit="main.css",
    tailwind={
        "theme": {
            "extend": {
            }
        },
        "plugins": [
            "@tailwindcss/typography",
            "@tailwindcss/forms",
            ],
    }
)