import React from "react";
import { Link } from "react-router-dom";
import { Button, Text, Box, Group } from "@mantine/core";
import { HiOutlineShoppingBag, HiUserCircle } from "react-icons/hi";
import Logo from "../general/logo";
import MenuModal from "../general/menuModal";
import { useViewportSize } from "@mantine/hooks";
import "../../css/nav-bar.css";

export default function Navbar() {
    const { height, width } = useViewportSize();

    return (
        <>
            <div className="nav-bar">
                {width > 1100 ? (
                    <>
                        <Logo classname="nav-bar-btn" />

                        <Link to="/">
                            <Button
                                color="gray"
                                radius="xs"
                                uppercase
                                className="nav-bar-btn"
                            >
                                <Text className="nav-bar-btn-text">
                                    Trang chủ
                                </Text>
                            </Button>
                        </Link>

                        <Link to="/products">
                            <Button
                                color="gray"
                                radius="xs"
                                uppercase
                                className="nav-bar-btn"
                            >
                                <Text className="nav-bar-btn-text">
                                    Sản phẩm
                                </Text>
                            </Button>
                        </Link>
                        <Link to="/contact">
                            <Button
                                color="gray"
                                radius="xs"
                                uppercase
                                className="nav-bar-btn"
                            >
                                <Text className="nav-bar-btn-text">
                                    Liên hệ
                                </Text>
                            </Button>
                        </Link>

                        <Link to="/introduction">
                            <Button
                                color="gray"
                                radius="xs"
                                uppercase
                                className="nav-bar-btn"
                            >
                                <Text className="nav-bar-btn-text">
                                    Giới thiệu
                                </Text>
                            </Button>
                        </Link>

                        <Link to="/news">
                            <Button
                                color="gray"
                                radius="xs"
                                uppercase
                                className="nav-bar-btn"
                            >
                                <Text className="nav-bar-btn-text">
                                    Tin Tức
                                </Text>
                            </Button>
                        </Link>
                        <Link to="/signin">
                            <Button
                                color="gray"
                                radius="xs"
                                uppercase
                                className="nav-bar-right nav-bar-btn"
                            >
                                <Text className="nav-bar-btn-text">
                                    Đăng nhập/đăng ký
                                </Text>
                            </Button>
                        </Link>
                        <Link to="/cart">
                            <Button
                                color="gray"
                                radius="xs"
                                uppercase
                                className="nav-bar-right nav-bar-btn"
                            >
                                <Text className="nav-bar-btn-text">
                                    <HiOutlineShoppingBag size={30} />{" "}
                                </Text>
                            </Button>
                        </Link>
                    </>
                ) : (
                    <>
                        <MenuModal />
                        <Logo classname="nav-bar-center" />
                        <div className="nav-mobile-btn-group">
                            <Link to="/cart">
                                <Button
                                    color="gray"
                                    radius="xs"
                                    uppercase
                                    className="nav-bar-btn"
                                >
                                    <Text className="nav-bar-btn-text">
                                        <HiOutlineShoppingBag size={30} />{" "}
                                    </Text>
                                </Button>
                            </Link>
                            <Link to="/signin">
                                <Button
                                    color="gray"
                                    radius="xs"
                                    uppercase
                                    className="nav-bar-btn"
                                >
                                    <Text className="nav-bar-btn-text">
                                        <HiUserCircle size={30} />
                                    </Text>
                                </Button>
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}
