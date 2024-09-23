import { Button } from "@core/ui";
import { Typography } from "@mui/joy";
import { useState } from "react";

const App = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <Button
                onClick={() => setCount((prev) => prev + 1)}
                variant="solid"
                color="success"
                size="sm">
                Click Me
            </Button>
            <Typography pt={1}>Button clicked ({count}) times</Typography>
        </>
    );
};

export default App;
