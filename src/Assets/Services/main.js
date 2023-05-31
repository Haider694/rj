export const getMenu = () => {
  const menu = {
    pizza: [
      {
        name: "Soft Paneer",
        price: { small: 199, medium: 279 },
        description: ["Paneer", "Capsicum", "Onion"],
      },
      {
        name: "Jalapeno Green",
        price: { small: 199, medium: 279 },
        description: ["Olive", "Capsicum", "Onion", "Jalapeno"],
      },
      {
        name: "Delight Corn",
        price: { small: 199, medium: 279 },
        description: ["Mozzarella", "Cheddar", "Corn"],
      },
      {
        name: "Spice up",
        price: { small: 199, medium: 279 },
        description: ["Schezwan", "Garlic", "Red Onion", "Tomato"],
      },
      {
        name: "Margherita",
        price: { small: 199, medium: 279 },
        description: ["Mozzarella", "Cheddar", "Corn"],
      },
      {
        name: "Vegetarian",
        price: { small: 199, medium: 279 },
        description: ["Bell pepper", "Olive", "Onion"],
      },
      {
        name: "Capsicum Onion",
        price: { small: 199, medium: 279 },
        description: ["Corn", "Capsicum, Onion", "Schezwan"],
      },
    ],
    sandwich: [
      {
        name: "Grilled Cheese",
        price: 90,
        description: ["Mozzerella", "Processed Cheese"],
      },
      {
        name: "Veg Grilled",
        price: 90,
        description: ["Onion", "Tomato", "Capsicum", "Colslaw"],
      },
      {
        name: "Paneer Grilled",
        price: 110,
        description: ["Cabbage", "Tomato", "Onion", "Paneer", "Cheese"],
      },
    ],
    clubSandwich: [
      {
        name: "Veg Club",
        price: 120,
        description: ["Colslaw", "Tomato", "Onion", "Capsicum", "Cheese"],
      },
      {
        name: "Paneer Club",
        price: 150,
        description: ["Colslaw", "Tomato", "Onion", "Paneer", "Cheese"],
      },
      {
        name: "Crispy Potato",
        price: 150,
        description: ["Cabbage", "Crispy Potato", "Onion", "Tomato", "Cheese"],
      },
      {
        name: "Rao Special",
        price: 170,
        description: [
          "Cabbage",
          "Crispy Potato",
          "Onion",
          "Tomato",
          "Panner",
          "Cheese",
        ],
      },
    ],
  };

  return menu;
};

export const authenticateUser = () => {
  const sessionId = "akdjaljLKJsdjKJljsdjJjdefoefml33kalsd23mladsKJml2w";

  return sessionId;
};
