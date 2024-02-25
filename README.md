

<!-- ABOUT THE PROJECT -->

## Aslan Pay - Cloning and Execution Instructions
To access and execute the Aslan Pay application, follow these formal instructions:


## Aslan Pay Backend - Setup and Execution Instructions
Begin by cloning the Aslan Pay repository to your local environment. Use the following command in your terminal:

  ```sh
  git clone https://github.com/secondbreathx/pay.git
  ```

##  Setting Up Java SDK
Ensure that you have Java SDK 19 installed on your system. The application relies on Java 19 for optimal functionality.

## Executing the Application
Navigate to the project directory by using the following command:

  ```sh
  cd pay
  ```

## Run the application with the following Gradle command:

  ```sh
./gradlew bootRun
  ```

## To interact with the Aslan Pay application using Postman, follow the steps outlined below:

1. Import Collection to Postman [Postman Collections](aslanpaycollection.postman_collection.json)

- Click on the "Import" button in the top left corner.

2. Execute Add Category
- Open the Aslan Pay collection in Postman.
- Navigate to the "Add Category" request.
- Required parameters are included!
- Click on the "Send" button to execute the request.
- Verify the response for success or any error messages.

3. Execute Fetch Category
- In Postman, go to the "Fetch Category" request.
- Click on the "Send" button to execute the request.
- Check the response to ensure that the category data is retrieved successfully.

4. Execute Add Product
- Locate the "Add Product" request in the Aslan Pay collection.
- Required parameters are included!
- Click on the "Send" button to execute the request.
- Review the response for confirmation or error details.

5. Execute Fetch Products with Params
- Find the "Fetch Products with Params" request in the collection.
- Required parameters are included!
- Click on the "Send" button to execute the request.
- Examine the response to confirm that product data is retrieved based on the specified parameters.


## Aslan Pay Frontend - Setup and Execution Instructions
To set up and run the Aslan Pay Frontend, follow these formal instructions:

### Clone the Repository
Begin by cloning the Aslan Pay Frontend repository to your local environment. Use the following command in your terminal:

  ```sh
git clone https://github.com/secondbreathx/aslan-pay-frontend.git
  ```

### Install Dependencies
Navigate to the project directory using:
  ```sh
cd aslan-pay-frontend
  ```

### Install the necessary dependencies for the Aslan Pay Frontend by running:

  ```sh
npm install
  ```

This command ensures that all required packages are installed and ready for use.

### Start the Application
Initiate the Aslan Pay Frontend application by executing:

  ```sh
npm start
  ```

### Run the Simulator
During the application startup, you will be prompted to press either "i" or "a" to run the simulator. Choose the appropriate key to launch the simulator.


### Screenshots 

[Home Screen](screenshots/homescreen.png)
[Favourite Screen](screenshots/favoruitescreen.png)
[Search Screen](screenshots/searchscreen.png)




