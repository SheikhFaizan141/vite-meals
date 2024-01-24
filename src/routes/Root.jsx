import { Outlet } from "react-router-dom";
import AppHeader from '../components/AppHeader';
import AppFooter from "../components/AppFooter";
import { useEffect, useReducer, useState } from "react";
import mealsReducer from "../mealsReducer";
import { Container } from "@mui/material";

const taxRate = 0.05;

export default function Root() {

    const [items, dispatch] = useReducer(mealsReducer, []);
    const [itemTotalPrice, setItemTotalPrice] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalTax, setTotalTax] = useState(0);

    useEffect(() => {
        const total = items.reduce((acc, currValue) => acc + (currValue.price * currValue.qty), 0)
        const taxTotal = total * taxRate;

        setTotalTax(taxTotal)
        setItemTotalPrice(total)
        setTotalPrice(total + taxTotal)
    }, [items])

    return (
        <>

            <AppHeader />
            <Container className="container">
                <Outlet context={{ items: items, dispatch: dispatch, totalPrice: totalPrice, itemTotalPrice: itemTotalPrice, tax: totalTax }} />
            </Container>
            <AppFooter />
        </>
    )
}
