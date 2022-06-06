# DartMart:  On-Demand Food Delivery Anywhere on Dartmouth's Campus

## How Might We reimagine on-demand food delivery service in a viable manner for Dartmouth's remote college campus?


 Through a React Native mobile application (optimized currently for iOS), DartMart operates as a peer-run gig-style delivery application in which users may either place orders as a customer or register as a "driver" and fulfill orders. To ensure users are Dartmouth students (with access to secure campus buildings and a dedication to the betterment of their community), users are authenticated through Dartmouth's SSO Login (supported in our app by Heroku). Inventory, users, and orders are stored in a Cloud Firestore database (Firebase), which supports reading of data (such as inventory, user info, and order contents) as well as updating  data (such as order status, user roles). After perusing an inventory screen (browsable by category filters and search) and selecting desired items and quantities via popup modals, users may review cart items, taxes, and fees from the Cart Screen before completing Checkout. Payment is handled securely through a Stripe popup modal in the Cart Screen (with Stripe server hosted on Render). Order Status Updates are provided via input from the student delivering the food. Delivery View can be enabled in the Profile screen, and Delivery view displays orders available to be accepted, with detailed modals about each order providing additional information. Accepted orders are displayed with the option to cancel or complete an order via a popup modal. A user may revert from Driver view back to Customer view via the Profile Page. This application is designed with the intent of real-world use by the existing company (DartMart LLC) for future operations, and will be deployed in the near future with additional refinements.


## Architecture

Front End:  
* React Native W/Express, (tested here with Expo)

Back End: 
* Heroku (User Authentication)
* Firebase (User and order storage)
* Stripe (payment processing)
* Render.com (web service endpoints to hit stripe)[hosted Here](https://stripeserver.onrender.com)

## Setup

To test the environment locally you will need to run the front end with expo and the stripe endpoint server with node.

in project-dartmart, run:
`npm install && expo start -i`
to install package dependencies and start the IOS version of the app on your emulator.

Then
`cd server/
node index.js `


## GIFS of DartMart in Action

Payment Flow:

![Payment Flow](gifs/DM_PaymentFlow.gif)

(Payment Flow is a long GIF so it is also available as a .mov file in this repo):


https://user-images.githubusercontent.com/62917324/172093459-304a78db-3066-4f2d-b009-71251cd42503.mov


Cancelled Payment:

![Cancelled Payment](gifs/DM_CancelledPayment.gif)


Splash Screen to SSO Login:

![Splash to SSO](gifs/DM_SplashToSSOLogin.gif)

Browse Inventory:

![Browse Inventory](gifs/DM_ScrollInventory.gif)

Search Inventory:

![Search Inventory](gifs/DM_InventorySearch.gif)

Switching Driver/Customer Roles + Logout:

![Switch User Role](gifs/DM_SwitchingViews_Logout.gif)

Fulfilling Orders as a Driver:

![Fulfill Orders](gifs/DM_OrderScreen.gif)


## Authors

{
Edmund Aduse Poku,
Camden Hao,
Burke Jaeger,
Garrett Johnston,
Will McCall,
Harold Than,
}

<div style="display: flex;">
<img src='https://media-exp2.licdn.com/dms/image/C4E03AQHV3JnXeU6Hhw/profile-displayphoto-shrink_400_400/0/1631854128489?e=1659571200&v=beta&t=Y-vtpDyc6bVYv06CnjG-x5FAfMA6OL4-11WtArdJPsw' style="width:300px;height:300px;" />
<img src='https://media-exp2.licdn.com/dms/image/C4E03AQG3UEpmF3OC2Q/profile-displayphoto-shrink_400_400/0/1596480559443?e=1659571200&v=beta&t=9-OPagyBLfo7L5vwioAJpCF-IvBSdXSyoGVUMxA5UPc' style="width:300px;height:300px;" />
<img src='https://media-exp2.licdn.com/dms/image/C4D03AQEM8mXT7WwaWQ/profile-displayphoto-shrink_400_400/0/1644938805452?e=1659571200&v=beta&t=gYSk4Y62agvjkn0V2H0kNh4YeD87QqxKZ73Hyw5d7kU' style="width:300px;height:300px;" />
<img src='https://media-exp2.licdn.com/dms/image/C4D03AQFPaUUF9tJWqg/profile-displayphoto-shrink_400_400/0/1635903534093?e=1659571200&v=beta&t=Smz2pl-LHk0PtT0A_m8cnOo3D2sv46wRHYFYUfrRI6A' style="width:300px;height:300px;" />
<img src='https://media-exp2.licdn.com/dms/image/C4D03AQFYN3suAiH4VA/profile-displayphoto-shrink_400_400/0/1627012112467?e=1659571200&v=beta&t=XomvJB1ebkhvFzQqsBYrlNKruv5xRMdmrqNEDon9gJY' style="width:300px;height:300px;" />
<img src='https://media-exp2.licdn.com/dms/image/C5103AQHcI5DKVeeHIg/profile-displayphoto-shrink_800_800/0/1526807577961?e=1659571200&v=beta&t=DBdC4jF0TBkTueL_Z2VPp0GGBActe7BrVWaZ5h-i4fg' style="width:300px;height:300px;" />
</div>



