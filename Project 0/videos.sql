USE first_db;
CREATE TABLE IF NOT EXISTS videos (
	id INT AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    user_id INT,
    time_uploaded DATETIME DEFAULT CURRENT_TIMESTAMP,
    path VARCHAR(200) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (user_id) REFERENCES user(id)
)