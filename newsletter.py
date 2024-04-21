#news_api_key = 'ce8117c08ee1458b80f990a43ec6af86'
#agro_api_key = 'c8387e2975fcc79e88dde2a841b6b853'
import tkinter as tk
from tkinter import messagebox
import webbrowser
import requests

def fetch_agricultural_news(api_key):
    url = 'https://newsapi.org/v2/everything'
    params = {
        'q': 'agriculture OR farming OR crops OR livestock OR agricultural OR agribusiness OR agroecology',
        'language': 'en',
        'sortBy': 'publishedAt',
        'apiKey': api_key
    }

    try:
        response = requests.get(url, params=params)
        if response.status_code == 200:
            data = response.json()
            articles = data['articles']
            return articles
        else:
            print(f"Failed to fetch news. Status code: {response.status_code}")
            return []
    except Exception as e:
        print(f"An error occurred: {str(e)}")
        return []

def update_news():
    # Clear existing labels
    for widget in news_frame.winfo_children():
        widget.destroy()

    articles = fetch_agricultural_news(api_key)
    for i, article in enumerate(articles):
        if 'title' in article and 'description' in article and article['title'] != "[removed]" and article['description'] != "[removed]":
            title_label = tk.Label(news_frame, text=article['title'], wraplength=400, justify=tk.LEFT, anchor='w', cursor='hand2')
            title_label.grid(row=i, column=0, sticky='w', padx=10, pady=5)
            title_label.bind("<Button-1>", lambda event, url=article['url']: open_url(url))

            description_label = tk.Label(news_frame, text=article['description'], wraplength=400, justify=tk.LEFT, anchor='w')
            description_label.grid(row=i, column=1, sticky='w', padx=10, pady=5)

def open_url(url):
    if messagebox.askyesno("Open URL", "Do you want to open this URL in your web browser?"):
        webbrowser.open_new(url)

# Replace 'YOUR_API_KEY' with your actual News API key
api_key = 'ce8117c08ee1458b80f990a43ec6af86'

# Create the main window
root = tk.Tk()
root.title("Agricultural News Viewer")

# Create a frame to hold the news labels
news_frame = tk.Frame(root)
news_frame.pack(padx=10, pady=10)

# Create a button to fetch and update news
fetch_button = tk.Button(root, text="Fetch News", command=update_news)
fetch_button.pack(pady=5)

# Run the application
root.mainloop()


