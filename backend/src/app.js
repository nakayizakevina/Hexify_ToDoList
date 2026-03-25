import express from 'express'
import cors from "cors";

const app = express ();

app.use(express.json());
app.use(cors(
    {
  origin: "http://127.0.0.1:5500",
  methods: ["GET", "POST", "PATCH", "DELETE"],
  credentials: true
}
));


import taskRouter from '../routes/task.route.js';

app.use("/api/v1/task", taskRouter);
app.use("/api/v1/task/alltasks", taskRouter);
app.use("/api/v1/task/getsingletask/:task_id", taskRouter);
app.use("/api/v1/task/deletetask/:task_id", taskRouter);
app.use("/api/v1/task/edittask/:task_id", taskRouter);



//example route: http://localhost:4000/api/v1/task/deletetask/:task_id





export default app;