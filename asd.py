import requests

def get_json_info():
    url = "https://dc.alexdot.me/v1/users/399668151475765258"
    try:
        response = requests.get(url)
        response.raise_for_status()  # Check if the request was successful
        return response.json()
    except requests.RequestException as e:
        print(f"Request failed: {e}")
        return None

def get_user_info():
    json_info = get_json_info()
    if json_info and 'data' in json_info and 'discord_user' in json_info['data']:
        return json_info['data']['discord_user']['username']
    else:
        print("User info not found")
        return None

def get_spotify_song(info_type):
    json_info = get_json_info()
    if json_info and 'data' in json_info:
        spotify_info = json_info['data'].get('spotify')
        if spotify_info:
            if info_type == 'song_name':
                return spotify_info['song']
            elif info_type == 'album':
                return spotify_info['album']
            elif info_type == 'artist':
                return spotify_info['artist']
            elif info_type == 'album_art_url':
                return spotify_info['album_art_url']
        else:
            return "I'm not listening to spotify right now"
    else:
        print("Spotify song info not found")
        return None

# Example usage
print(get_user_info())
print(get_spotify_song('song_name'))
print(get_spotify_song('album'))
print(get_spotify_song('artist'))
print(get_spotify_song('album_art_url'))