# Libraries
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

import time
import pyperclip

import os

# WebDriver Path
driver_path = "/usr/local/bin/chromedriver-mac-arm64/chromedriver"

# Init WebDriver
driver = webdriver.Chrome(service=webdriver.chrome.service.Service(driver_path))

try: 
    # Open LinkedIn
    driver.get("https://www.linkedin.com/login")
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, "username")))

    # Enter Credentials
    username = driver.find_element(By.ID, "username")
    password = driver.find_element(By.ID, "password")

    username.send_keys("#")
    password.send_keys("#")
    password.send_keys(Keys.RETURN)

    time.sleep(1)

    # Navigate to Inbox
    inbox = driver.find_element(By.CSS_SELECTOR, ".global-nav__primary-items > .global-nav__primary-item:nth-child(4)").click()
    WebDriverWait(inbox, 10).until(EC.presence_of_element_located((By.CLASS_NAME, ".authentication-outlet")))

    # Get the Downloads folder path
    downloads_folder = os.path.join(os.path.expanduser("~"), "Downloads")

    # Specify the screenshot file path in the Downloads folder
    screenshot_path = os.path.join(downloads_folder, "screenshot.png")

    # Save the screenshot
    driver.save_screenshot(screenshot_path)


    # Copy Message
    """ messages = driver.find_elements(By.TAG_NAME, "p")

    for i, message in enumerate(messages):
        if i == 3: break

        pyperclip.copy(message.text)
        print(i, message.text) """

except Exception as e:
    print(f"An error occurred: {e}")

finally:
    # Close browser
    time.sleep(20)
    
    driver.quit()
