from rxconfig import config

import reflex as rx
import pysite.utility as u

style_path = f"{config.styleshit}"

def navbar() -> rx.Component:
    return rx.box(
        rx.hstack(
            rx.heading(u.navbar_logo, font_family=u.navbar_logo_font_family, font_size=u.navbar_logo_font_size, class_name="select-none mx-4"),
            rx.heading("project alex.", font_family="IBM Plex Mono", class_name="select-none text-2xl underline"),
        ),
        class_name=f"absolute top-4 left-0 mx-4 flex font-extrabold w-fit items-stretch",
    )

title = rx.hstack(
            rx.text("i'm", font_weight="bold", align="center", class_name="text-4xl sm:text-5xl"),
            rx.text("alex.", font_weight="bold", align="center", class_name="underline text-4xl sm:text-5xl")
        )

introduction = rx.box(
    rx.markdown(f"I'm a {u.age} year old **IT Junior Procedure Administrator** in Germany.", class_name=f"py-1"),
    rx.markdown("I'm learning Python as a hobby and love tinkering around with it.", class_name=f"py-1"),
    rx.markdown("Contact me, if you have any questions or just want to chat", class_name=f"py-1"),
    rx.text("Email me: ", rx.link("alex@alexdot.me", href="mailto:alex@alexdot.me", text_decoration="underline"), class_name=f"py-1"),
    line_height="0.2em",
    )

profile = rx.flex(
    rx.vstack(
        title,
        introduction,
        class_name=f"absolute inset-y-1/2 items-center justify-center text-center text-xs sm:text-base",
    ),
    class_name="items-center justify-center"
)


def footer() -> rx.Component:
    return rx.box(
        rx.text("made with 💛 by alex.",
                # add 'class_name="fixed bottom-5 right-5 opacity-50"' and decrease the size of the text
                class_name="fixed bottom-5 right-5 opacity-50 text-xs"
                )
        )


def dark_mode() -> rx.Component:
    # Define the logos for light and dark modes
    light_logo = rx.image(src="/images/black_sun_4096.png", on_click=rx.toggle_color_mode, class_name="h-12 w-12 transition")
    dark_logo = rx.image(src="/images/white_moon_4096.png", on_click=rx.toggle_color_mode, class_name="h-12 w-12 transition")
    
    # Use rx.color_mode_cond to switch between logos based on the theme
    logo_button = rx.color_mode_cond(light=light_logo, dark=dark_logo)
    return rx.box(
        logo_button,
        class_name=f"fixed top-0 right-0 mx-4 my-4 z-50 transition",
        )

def index() -> rx.Component:
    return rx.flex(
            navbar(),
            dark_mode(),
            footer(),
            rx.container(
                profile,
                class_name=f"relative transition",
            ),
            class_name=rx.color_mode_cond(
                light="static w-screen h-screen bg-white transition",
                dark="static w-screen h-screen bg-black transition",
            )
            )


app = rx.App(
    stylesheets= [
        style_path,
        "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;700&display=swap",
    ],
    #overlay_component=None,
)
app.add_page(index,
            route="/",
            title="WORK IN PROGRESS | project alex.",
            description="this website is far from done",
            image="https://cdn.discordapp.com/attachments/879788833196081192/1139677702958362665/dfnukjz-0f4dc473-62cc-473c-8ee8-e1a01f5787f6.png",
            )
