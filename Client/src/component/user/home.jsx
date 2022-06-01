import React from "react";
import "../../css/home.css";
import { Title } from "@mantine/core";
import Slider from "../general/slider";
import ProductCard from "../general/productCard";
import HomeAds from "../general/homeAds";

const products = [
    <ProductCard key={1} />,
    <ProductCard key={2} />,
    <ProductCard key={3} />,
    <ProductCard key={4} />,
    <ProductCard key={5} />,
    <ProductCard key={6} />,
    <ProductCard key={7} />,
];

const items = [
    <HomeAds
        img={
            "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
        }
    />,
    <HomeAds
        img={
            "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
        }
    />,
    <HomeAds
        img={
            "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        }
    />,
    <HomeAds
        img={
            "https://images.unsplash.com/photo-1541778480-fc1752bbc2a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1296&q=80"
        }
    />,
];
export default function Home() {
    return (
        <>
            <div className="home">
                <Slider type="homeads" items={items} />
                <Title align="center" order={2} className="home-title">
                    Sản phẩm bán chạy nhất
                </Title>
                <Slider type="product" items={products} />
                <Title align="center" order={2} className="home-title">
                    Sản phẩm mới nhất
                </Title>
                <Slider type="product" items={products} />
            </div>
        </>
    );
}
