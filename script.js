/* CSS */
body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
    color: #333;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
}

.header {
    background-color: #ff8c00;
    padding: 20px 0;
    text-align: center;
    color: white;
}

.header .logo {
    font-size: 2rem;
    margin: 0;
}

.header nav ul {
    list-style: none;
    padding: 0;
    margin: 20px 0 0;
    display: flex;
    justify-content: center;
    gap: 20px;
}

.header nav ul li {
    display: inline;
}

.header nav ul li a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
}

.hero {
    background: linear-gradient(to right, #ff8c00, #ffd700);
    color: white;
    padding: 80px 0;
    text-align: center;
}

.hero h2 {
    font-size: 2rem;
    margin-bottom: 20px;
}

.hero p {
    font-size: 1.1rem;
}

.menu {
    padding: 50px 0;
    background-color: #fff;
}

.menu h2 {
    text-align: center;
    color: #ff8c00;
    margin-bottom: 30px;
}

.menu-items {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

.menu-item {
    background-color: #fdfdfd;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    flex: 1 1 200px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.menu-item h3 {
    color: #ff8c00;
    margin-bottom: 10px;
}

.menu-item:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.price {
    display: block;
    margin-top: 10px;
    font-size: 1.2rem;
    color: #ff8c00;
}

.about, .contact {
    padding: 50px 0;
    background-color: #fff;
}

.about p, .contact p {
    text-align: center;
    font-size: 1.1rem;
}

.footer {
    background-color: #333;
    color: white;
    padding: 20px 0;
    text-align: center;
}
