CREATE TABLE articles (
 id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
 name VARCHAR(255),
 date DATE,
 price FLOAT,
 quantity INT
);

CREATE TABLE users (
 id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
 email VARCHAR(255),
 password TEXT,
 address TEXT,
 lastname VARCHAR(255),
 firstname VARCHAR(255)
);

INSERT INTO articles (name, date, price, quantity)
VALUES
('Fitbit - Versa', NOW(), '159.90', '12'),
('Asus TUF705GE-EV130T PC Portable Gamer', NOW(), '999.90', '4'),
('Logitech G910 Clavier de jeu Mécanique', NOW(), '109.90', '38'),
('Amazon Echo', NOW(), '59.90', '895'),
('OnePlus 6 Smartphone débloqué 4G', NOW(), '459.90', '30'),
('VicTsing Diffuseur Huiles Essentielles 300ml Humidificateur d\'air ', NOW(), '18.16', '103'),
('Bâtons de réglisse Bio 100g - 12 bâtons minimum', NOW(), '9.99', '4059'),
('Fossil Montre Homme FS4662', NOW(), '67.90', '100'),
('Gelée Royale BIO', NOW(), '28.90', '100'),
('Charbon végétal activé', NOW(), '4.90', '100'),
('Baume démêlant brillance au Monoï', NOW(), '8.90', '100'),
('Hydrolat Calendula BIO', NOW(), '4.90', '100'),
('Eau aromatique citronnée BIO', NOW(), '5.90', '100'),
('Ultimate Ears MEGABLAST Enceinte portable Wi-Fi/Bluetooth', NOW(), '129.90', '100'),
('Reolink Panneau Solaire d\'alimentation', NOW(), '14.99', '100'),
('Apple MD463ZM/A Adaptateur Thunderbolt vers Ethernet', NOW(), '33.22', '100'),
('Abeil Couette Bio Attitude chaude Coton Blanc 240 x 260', NOW(), '44.90', '100'),
('SanDisk Carte Mémoire microSDHC SanDisk Ultra 32GB', NOW(), '9.45', '100'),
('Crucial SSD interne MX500 (250Go, 3D NAND, SATA, 2,5 pouces)', NOW(), '42.90', '100'),
('Logitech M330 Souris sans Fil Silencieuse USB', NOW(), '14.90', '100'),
('Webcam Logitech C920 HD Pro', NOW(), '54.90', '100');