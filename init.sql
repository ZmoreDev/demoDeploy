-- Create a database if it doesn't exist
CREATE DATABASE IF NOT EXISTS my_database;

-- Use the database
USE my_database;

-- Create a table named 'items'
CREATE TABLE IF NOT EXISTS items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Optionally, insert some initial data into the 'items' table
INSERT INTO items (name, description, price) VALUES
('Item 1', 'This is the first item', 19.99),
('Item 2', 'This is the second item', 29.99),
('Item 3', 'This is the third item', 39.99);