# DartMart:  A food delivery app for Dartmouth



This React Native application will allow Authenticated Dartmouth students to order snacks on demand from anywhere on campus at the touch of a button.

Uploading DartMartDemo.mov…

## Architecture

Front End:  
* React Native W/Express, (tested with expo)

Back End: 
* Heroku (User Authentication)
* Firebase (User and order storage)
* Stripe (payment processing)
* Render.com (web service endpoints to hit stripe)(hosted here)[https://stripeserver.onrender.com]

## Setup

To test the environment locally you will need to run the front end with expo and the stripe endpoint server with node.

in project-dartmart, run:
`npm install && expo start -i`
to install package dependencies and start the IOS version of the app on your emulator.

Then
`cd server/
node index.js `


## GIFS of DartMart in Action

Splash Screen to SSO Login:

![Splash to SSO](gifs/DM_SplashToSSOLogin.gif)

Browse Inventory:

![Splash to SSO](gifs/DM_ScrollInventory.gif)

Search Inventory:

![Splash to SSO](gifs/DM_InventorySearch.gif)

Switching Driver/Customer Roles + Logout:

![Splash to SSO](gifs/DM_SwitchingViews_Logout.gif)

Fulfilling Orders as a Driver:

![Splash to SSO](gifs/DM_OrderScreen.gif)


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



