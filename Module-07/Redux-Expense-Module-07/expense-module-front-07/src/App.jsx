import Balance from "./components/Balance.jsx";
import Layout from "./components/Layout.jsx";
import Form from "./components/Form.jsx";
import Transactions from "./components/Transactions/Transactions.jsx";

const App = () => {
    return (
        <>
            <Layout>
                <Balance />
                <Form />
                <Transactions />
            </Layout>
        </>
    );
};

export default App;