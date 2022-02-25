# Planning
https://whimsical.com/ironmaidensbnb-MVw1gkTJrekF2QTaEKCMJU

# Components/Routes

<NavBar />

path="/"
  <HomePage />

path="/apartments"
  <ApartmentsList />
  --> call API (GET /apartments )
  --> display links for each apartment


path="/apartments/42"
  <ApartmentsDetails />
  --> call API   (GET /apartments/42 )
  --> display aparment details

path="/apartments/create"
  <CreateApartment />
  --> form (controlled component)
  --> call API   (POST /apartments + body)
  
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
