import { Typography } from "antd";

function AppFooter(){
    return (
        <div className="AppFooter">
        <Typography.Link href="tel:+8491137764" target={'_blank'}>
            +84911397764
        </Typography.Link>
        <Typography.Link href="https://www.google.com.vn" target={'_blank'}>
            Privacy Policy
        </Typography.Link>
        <Typography.Link href="https://www.google.com.vn" target={'_blank'}>
            Terms of use
        </Typography.Link>
    </div>
    );
}

export default AppFooter;