import app from "./app.js";
import { PORT } from "./Utils/config.js";

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
