import pandas as pd

# List of file names and states
files = {
    "New South Wales": "DATA/.csv",
    "Victoria": "path_to_victoria_sheet.csv",
    "Queensland": "path_to_queensland_sheet.csv",
    "Western Australia": "path_to_wa_sheet.csv",
    "South Australia": "path_to_sa_sheet.csv"
}

# Combine data from all sheets
dataframes = []

for state, file in files.items():
    df = pd.read_csv(file)  # Read the state-specific CSV file
    df['State'] = state     # Add a column for the state
    dataframes.append(df[['State', 'RRP', 'SETTLEMENTDATE']])  # Keep only necessary columns

# Concatenate all DataFrames into a single DataFrame
combined_data = pd.concat(dataframes, ignore_index=True)

# Save combined data to a CSV (optional)
combined_data.to_csv("combined_rrp_data.csv", index=False)
