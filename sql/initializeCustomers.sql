DROP TABLE IF EXISTS customers, benifits;

CREATE TABLE customers (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    home_address VARCHAR(50),
    sqft VARCHAR(50),
    PRIMARY KEY (id));

    CREATE TABLE benifits (
        id INT NOT NULL AUTO_INCREMENT,
        user_id INT NOT NULL,
        lawn_price VARCHAR(50),
        pest_price VARCHAR(50),
        horticulture_price VARCHAR(50),
        PRIMARY KEY (id),
        FOREIGN KEY (user_id)
        REFERENCES customers (id)
        ON DELETE CASCADE
        );

        INSERT INTO customers
        (first_name, last_name, home_address)
        VALUES 
        ("jay","dee","111_home_street");
      

        INSERT INTO benifits
        (lawn_price, pest_price, horticulture_price, user_id)
        VALUES 
        ("100","100","100" "1");
