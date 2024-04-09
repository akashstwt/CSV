import { DownloadOutlined } from "@ant-design/icons";
import { Button } from "antd";

const DownloadBtn = ({ handleDownload, text, size }) => {
  return (
    <Button
      type="primary"
      icon={<DownloadOutlined />}
      size={size}
      onClick={handleDownload}
      className="font-bold"
    >
      {text}
    </Button>
  );
};

export default DownloadBtn;
