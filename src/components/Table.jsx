import React from "react";
import { Tag, Space, Row, Col, Avatar } from "antd";
import millify from "millify";

function TableElements({
  name,
  index,
  iconUrl,
  marketShare,
  volume,
  numberOfMarkets,
}) {
  return (
    <Row style={{ width: "100%" }}>
      <Col span={6}>
        <span>{index + 1}.</span>
        <Avatar className="exchange-image" src={iconUrl} size="large" />
        <span>{`${name}`}</span>
      </Col>
      <Col span={6}>{millify(volume)} $</Col>
      <Col span={6}>{millify(numberOfMarkets)}</Col>
      <Col span={6}>{millify(marketShare)} %</Col>
    </Row>
  );
}

export default TableElements;

// iconUrl: "https://cdn.coinranking.com/mDTK5qrmq/binance.svg"
// id: 286
// lastTickerCreatedAt: 1639170678000
// marketShare: 19.956651658314108
// name: "Binance"
// numberOfMarkets: 1330
// rank: 1
// uuid: "-zdvbieRdZ"
// verified: false
// volume: 21163042872.587517
// websiteUrl: "https://www.binance.com/en/register?ref=35424440"
