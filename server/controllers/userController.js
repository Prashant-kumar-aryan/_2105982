import axios from "axios";

export const getProducts = async (req, res) => {
  try {
    // Fetch access token using the route created above
    const {
      data: { access_token },
    } = await axios.get("http://localhost:4000/api/auth");

    // Construct the URL to fetch products from the external API
    const { company, category } = req.params;
    const { top, minPrice, maxPrice } = req.query;
    const url = `http://20.244.56.144/test/companies/${company}/categories/${category}/products?top=${top}&minPrice=${minPrice}&maxPrice=${maxPrice}`;

    // Fetch products using the access token
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    // Send the products in the response
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Error fetching products" });
  }
};

export const getAuthToken = async (req, res) => {
  try {
    // Make a request to the external API to obtain the access token
    const { data } = await axios.post("http://20.244.56.144/test/auth", {
      companyName: "goMart",
      clientID: "5b257f46-eada-4b33-ae3b-b5be90e15c1a",
      clientSecret: "afTkutKqOPMFRuPm",
      ownerName: "Prashant",
      ownerEmail: "2105982@kiit.ac.in",
      rollNo: "2105982",
    });

    // Send the access token in the response
    res.json({ access_token: data.access_token });
  } catch (error) {
    console.error("Error fetching access token:", error);
    res.status(500).json({ message: "Error fetching access token" });
  }
};
