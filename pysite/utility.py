style = {
    "user_drag": "none",
    "user_select": "none",
    "MozUserSelect": "none",
    "WebkitUserDrag": "none",
    "WebkitUserSelect": "none",
    "MsUserSelect": "none",
}



# NAVBAR Variables
navbar_logo = "a"
navbar_logo_font_family = "canterbury"
navbar_logo_font_size = "4.5em"

navbar_text = "project alex."



from datetime import datetime
def age_calculator(birthday):
    today = datetime.now()
    birthday = datetime.strptime(birthday, "%Y-%m-%d")
    age = today.year - birthday.year - ((today.month, today.day) < (birthday.month, birthday.day))
    return age
birthday = "2002-11-02"
age = age_calculator(birthday)



border1 = "border-2 border-dashed border-blue-600"
border2 = "border-4 border-double border-red-600"
border3 = "border-2 border-dashed border-green-600"
border4 = "border-2 border-dashed border-yellow-600"
border5 = "border-2 border-dashed border-purple-600"
