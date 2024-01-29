import {
  Affix,
  Avatar,
  Badge,
  Flex,
  Input,
  Layout,
  Menu,
  Popover,
  notification,
} from "antd";
import type { MenuProps } from "antd";
import { BoxBorder, FlexItem, Image, MenuHeader, style } from "./styles";
import Logo from "../../../assets/logo-mona.png";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDataContext } from "../../../contexts/ContextDatasProvider";
import CartItem from "../../../pages/Cart/CartItem";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../../config/firebase";
const Header = () => {
  const { Header } = Layout;
  const navigate = useNavigate();
  const { cartQty } = useDataContext();

  const [hide, setHide] = useState<string | null>();

  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = () => {
    api["success"]({
      message: "user is logged out",
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.displayName;
        setHide(uid);
      } else {
      }
    });
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        openNotificationWithIcon();
        navigate("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const itemsNav: MenuProps["items"] = [
    {
      label: "Trang Chủ",
      key: "/",
      style: style.styleLink,
    },
    {
      label: "Giới thiệu",
      key: "introduce",
      style: style.styleLink,
    },
    {
      label: "Sản Phẩm",
      key: "products",
      style: style.styleLink,
    },
    {
      label: "Blogs",
      key: "blog",
      style: style.styleLink,
    },
    {
      label: "Liên hệ",
      key: "contact",
      style: style.styleLink,
    },
  ];
  const onClick: MenuProps["onClick"] = (e: any) => {
    navigate(e.key);
  };
  return (
    <Layout style={style.bg}>
      <BoxBorder>
        <FlexItem>
          <Image src={Logo} />
          <Input
            style={style.input}
            placeholder="Tìm kiếm"
            size="large"
            suffix={<SearchOutlined style={style.suffix} />}
          />
          <Flex align="center" style={style.flex}>
            {auth.currentUser ? (
              <Popover
                placement="bottomRight"
                content={<p onClick={handleLogout}>logout</p>}
              >
                <Avatar
                  style={{
                    backgroundColor: "#f56a00",
                    verticalAlign: "middle",
                    marginRight: 10,
                  }}
                  size="large"
                >
                  {hide}
                </Avatar>
              </Popover>
            ) : (
              <UserOutlined
                style={style.iconSearch}
                onClick={() => navigate("/signin")}
              />
            )}
            <Popover placement="bottomRight" content={<CartItem />}>
              <Badge count={cartQty}>
                <ShoppingCartOutlined style={style.badge} />
              </Badge>
            </Popover>
          </Flex>
        </FlexItem>
      </BoxBorder>
      <Affix offsetTop={0}>
        <Header style={style.header}>
          <MenuHeader>
            {contextHolder}
            <Menu mode="inline" items={itemsNav} onClick={onClick} style={style.bg} />
          </MenuHeader>
        </Header>
      </Affix>
    </Layout>
  );
};

export default Header;
