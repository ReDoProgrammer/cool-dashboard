import {
    AppstoreOutlined,
    ShopOutlined,
    ShoppingCartOutlined,
    UserOutlined,
  } from "@ant-design/icons";
import { Menu } from "antd";

function SideMenu(){
    return <div className="SideMenu">
        <Menu 
        onClick={item=>{
            //item.key
        }}
            items={[
                {
                    label:"Dashboard",
                    icon:<AppstoreOutlined/>,
                    key:'/'
                },
                {
                    label:"Inventory",
                    key:'/inventory',
                    icon:<ShopOutlined/>
                },
                {
                    label:"Order",
                    key:'/order',
                    icon:<ShoppingCartOutlined/>
                },
                {
                    label:"Customers",
                    key:'/customers',
                    icon:<UserOutlined/>
                }
            ]}
        >
            
        </Menu>
    </div>
}

export default SideMenu;