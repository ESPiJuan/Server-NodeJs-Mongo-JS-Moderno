import express, { json } from 'express';
const app = express();
// Settings
app.set('port', process.env.PORT || 30000)
// Routes
import IndexRoutes from "./routes/index.routes";
import LinkRoutes from "./routes/links.routes";

// Middleware
app.use(json());


// Routes  Use
app.use(IndexRoutes);

app.use('/links', LinkRoutes);




export default app;