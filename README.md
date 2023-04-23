# Mobilicis India Private Limited Assessment - Frontend

Project Live Link:-  [Click](https://mobilicis-frontend.vercel.app/)

## Tech Stack Used

### Reactjs
### Redux
### React-Bootstrap

## Code Description

In the code given below, we have set number = 0, using useState Hook, and it gets changed as we select different options. Here, this number represents params that we will use in our API. On clicking on submit button, we will dispatch action sending number as argument in the redux-action function.

![form](https://user-images.githubusercontent.com/84731647/233829129-02bc87b3-6b75-4482-b964-25b61c3a6e74.png)

In the code given below, we have created a function where we are sending request in our backend server, (using number as params in our request), and then returning an object consisting of acction type and response.

![action](https://user-images.githubusercontent.com/84731647/233829135-8dd92b1f-7ca2-41f2-beef-f61593d8e23e.png)

In the code given below, this is our redux-reducer where we are sending our response.

![reducer](https://user-images.githubusercontent.com/84731647/233829191-b591c970-a7af-46c7-b671-5725007a63f7.png)

In the code given below, this our store where we are creating store and using thunk as we have used asynchronous calls in our action function.

![store](https://user-images.githubusercontent.com/84731647/233829198-1ade3a0e-b193-4c01-962a-8891b1a07b46.png)

Finally, using useSelector hook we will retrieve data from backend and will display it.

## Overall Description

Initially an empty page is displayed, which will ask user to select any one of the query that user want to apply to see all the data regarding it. On selecting any query, we dispatch action in the redux (we will also end query number as argument in the action function) which will fetch data from the backend server and then send back the data in the frontend component.

#### Initial Page

![1](https://user-images.githubusercontent.com/84731647/233828426-a9c56ef7-0f88-40c0-93af-e1b55e6417ff.png)

### After fetching data from backend

![2](https://user-images.githubusercontent.com/84731647/233828471-42c07f27-636a-4bf6-bea2-0e99e31a444c.png)

#### Backend Link:-- [Click](https://github.com/chaitanyatyagi/Mobilicis-Backend)
