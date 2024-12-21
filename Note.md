# **Steps to Setup the Project**

## **Prerequisites**

- Some changes in package.json to make sure we use the latest versions

## **Step 1: [Authenticatoin]**

### **Objective:**

To Add Authentication to the code.

### **Instructions:**

1. Install NextAuth packages `npm install next-auth@beta`
2. Do the [setup](https://authjs.dev/getting-started/installation?framework=Next.js)
3. Add a provider
4. Add Navbar and Header with Auth functionality 1:26

## **Step 2: [Config Tailwind]**

### **Objective:**

To customize team, fonts, and add class order formatting.

### **Instructions:**

1. Install Prettier packages `npm install -D prettier prettier-plugin-tailwindcss`
2. Setup .prettierrc
3. Add proper tailwind.config.ts configuration
4. Try to have your fonts and assets locally
5. Add fonts locally
6. Add some utility classes



## **Step 3: [Config Shadcn]**

### **Objective:**

Help you find bugs that you may have not found before.

### **Instructions:**

1. Install the CLI `npx shadcn@latest init`
2. Add Header, Heading, Cover Components
3. Add Search Form with searchParams and query

## **Step 4: [Add Heading & Card Components]**

### **Instructions:**

1. Create Heading Component
2. Create Search Component
3. Create Cards Component


<!-- 
---

## **Step 3: [Decorators & Routing]**

### **Objective:**

Better & cleaner code structure and reusablity.

### **Instructions:**

1. Put your controllers inside classes
2. install packages `npm i reflect-metadata`
3. Do the configuration in `tsconfig`.
4. Make your controllers
5. make a Controller decorator
6. make Route decorator
    1. get method, path , middlewares[]
    2. get existing routeHandlers or make a new Map
    3. check if method exists on routeHandlers map if not create it with value of empty Map
    4. set the value of reflectHanler method to the key of path and [...middlewares, discriptor.value]
    5. define the routeHandlers at the end
7. Create modules/routes.ts and defineRoutes function
    1. get controllers, application
    2. loop over all controllers inside get their routeHandlers
    3. get routeHandlers and baseRoute
    4. loop over keys of routeHandlers (methods)
    5. extract routes from each method and loop over the routes
    6. extract controllers from each routes and create the define each route
8. use defineRoutes function in server.ts

### **Expected Outcome:**

You should now be able to create your routes in a reusable and much cleaner way

---

## **Step 4: [Data Validation]**

### **Objective:**

Validating data is a curcial asspect of building robust and secure applications.

### **Instructions:**

1. Install Joi `npm i joi` (ts library for data validation)
2. Create Validate decorator
3. Create Joi schema for the controller
4. set the validate decorator for the route

---

---

## **Step 5: [Database Connection]**

### **Objective:**

Reusable using decorators

### **Instructions:**

1. Install main packages `npm i mongoos`
2. Set up mongo db Database

3. Add Database credentials to _src/config_ and _.env_
4. Connect to database using mongoose
5. Create a schema and its model
6. Create controllers for crud operations on that model
7. Declare Handlers for crud operations in each Request
8. Create Decorators for Crud Operations
    - Very Good Practice for future scalablity
9. Added ObjectId Validator Decorator
10. Add Validate and Crud Decorators to each route

### **Expected Outcome:**

returned value should be match what is in the database
