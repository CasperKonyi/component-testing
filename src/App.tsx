import { Button, Page, PageHeader } from "@core/ui";
import { UserAccountIcon } from "@hugeicons/react-pro";
import { Typography } from "@mui/joy";
import { useState } from "react";

const App = () => {
    const [count, setCount] = useState(0);
    return (
        <Page
            header={
                <PageHeader title="Component Test" icon={UserAccountIcon} />
            }>
            <Button
                onClick={() => setCount((prev) => prev + 1)}
                variant="solid"
                color="success"
                size="sm">
                Click Me
            </Button>
            <Typography pt={1}>Button clicked ({count}) times</Typography>
        </Page>
    );
};

export default App;
