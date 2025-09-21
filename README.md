# product-curd-frontend

Product CRUD Frontend

This is a React.js frontend application for managing products and their vendors. It allows users to view, add, and manage products by interacting with a backend API.


View Products – Fetch all products from the backend and display them in a table.

Display Vendors – Shows vendors associated with each product.

Add Product – Supports adding new products (can be extended to include vendors).

API Integration – Communicates with a Spring Boot backend (ProductService) for CRUD operations.

Responsive UI – Clean and readable table layout.



Tech Stack

Frontend: React.js (functional components, hooks)

HTTP Client: Axios

Styling: Inline CSS (can be extended to CSS modules or Tailwind)



Installation

Clone the repository


git clone <repository-url>
cd product-curd-frontend



Install dependencies
npm install

Start the development server
npm start

The app will run on http://localhost:3000
 by default.

Make sure your backend API is running on http://localhost:9999.
Project Structure
product-curd-frontend/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   └── ProductList.js       # Main component to display products and vendors
│   │
│   ├── services/
│   │   └── ProductService.js    # Axios API calls to backend
│   │
│   ├── App.js                   # Main App component
│   ├── index.js                 # React entry point
│   └── ...
│
├── package.json
└── README.md


Usage

View Products

The products table automatically fetches data from the backend on page load.

Shows Product Name, Product Rate, and associated Vendors.

Add Product

Use the input form (if implemented) to add a new product.

After adding, the table will refresh to display the new product.

Notes

Make sure the backend API matches the expected response structure:

{
  "success": true,
  "data": [
    {
      "prodId": 1,
      "prodName": "Laptop",
      "prodRate": 85000.0,
      "vendors": [
        { "vendorId": 1, "vendorName": "Vendor A" }
      ]
    }
  ],
  "message": "Products fetched successfully"
}


For CORS issues, ensure the backend allows requests from http://localhost:3000.