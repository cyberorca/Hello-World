Great! Since they are using a **query URL with parameters**, you can directly request distributor data using the ZIP code in the `search` parameter. This simplifies the scraping process since no JavaScript rendering is needed.  

---

## **Updated Python Script**
This script:  
✅ **Loops through all ZIP codes** (replace with the full list of 40K ZIPs).  
✅ **Sends a GET request** to fetch distributor data.  
✅ **Extracts name, location, category, address, phone, and website.**  
✅ **Saves results to a CSV file.**  

---

### **Install Dependencies** (if not already installed)
```sh
pip install requests beautifulsoup4 pandas
```

---

### **Python Script**
```python
import requests
import pandas as pd
from bs4 import BeautifulSoup
import time
import random

BASE_URL = "https://www.uniprofoodservice.com/distributors/directory"
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
}

# List of ZIP codes (replace with actual 40K ZIPs)
zip_codes = ["10001", "30301", "60601"]  # Example ZIPs

data = []

def get_distributors(zip_code):
    """Scrape distributors for a given ZIP code."""
    params = {"radius": 150, "search": zip_code}
    response = requests.get(BASE_URL, headers=HEADERS, params=params)

    if response.status_code != 200:
        print(f"Failed to get results for ZIP: {zip_code}")
        return []

    soup = BeautifulSoup(response.text, "html.parser")
    distributors = soup.select(".distributor-card")  # Adjust selector if needed
    
    results = []
    for distributor in distributors:
        name = distributor.select_one(".distributor-name").text.strip() if distributor.select_one(".distributor-name") else "N/A"
        location = distributor.select_one(".distributor-location").text.strip() if distributor.select_one(".distributor-location") else "N/A"
        category = distributor.select_one(".distributor-category").text.strip() if distributor.select_one(".distributor-category") else "N/A"
        
        # Extract distributor page URL
        detail_url = distributor.select_one("a")["href"] if distributor.select_one("a") else None
        full_detail_url = f"https://www.uniprofoodservice.com{detail_url}" if detail_url else None
        
        # Get additional details
        details = get_distributor_details(full_detail_url) if full_detail_url else {}

        results.append({
            "Name": name,
            "Location": location,
            "Category": category,
            "Address": details.get("Address", "N/A"),
            "Phone": details.get("Phone", "N/A"),
            "Website": details.get("Website", "N/A"),
        })

    return results

def get_distributor_details(url):
    """Scrape distributor details from the individual page."""
    response = requests.get(url, headers=HEADERS)
    if response.status_code != 200:
        return {}

    soup = BeautifulSoup(response.text, "html.parser")

    address = soup.select_one(".distributor-address").text.strip() if soup.select_one(".distributor-address") else "N/A"
    phone = soup.select_one(".distributor-phone").text.strip() if soup.select_one(".distributor-phone") else "N/A"
    website = soup.select_one(".distributor-website a")["href"] if soup.select_one(".distributor-website a") else "N/A"

    return {"Address": address, "Phone": phone, "Website": website}

# Main Scraping Loop
for zip_code in zip_codes:
    print(f"Scraping ZIP code: {zip_code}")
    distributors = get_distributors(zip_code)
    data.extend(distributors)

    time.sleep(random.uniform(1, 3))  # Avoid rate limiting

# Save to CSV
df = pd.DataFrame(data)
df.to_csv("unipro_distributors.csv", index=False)
print("Scraping completed! Data saved to unipro_distributors.csv")
```

---

### **How to Run**
1. **Replace** the `zip_codes` list with **all 40K ZIP codes**.  
2. **Run the script**:  
   ```sh
   python scraper.py
   ```
3. The final dataset will be saved as **`unipro_distributors.csv`**.  

---

## **Enhancements**
- **🚀 Multi-threading for faster scraping** (if needed).  
- **🛑 Use proxies** to avoid rate limiting.  
- **📊 Store in a database** instead of CSV for large data.  

---

Would you like me to add **proxies** or **multi-threading** to speed it up? 🚀
