import React, { useState } from "react";
import { Collapse, Row, Col } from "antd";
import TableElements from "./Table";
import { useGetCryptoExchangeQuery } from "../services/exchangesAPI";
import HTMLReactParser from "html-react-parser";

const { Panel } = Collapse;

const Exchanges = () => {
  const { data, isFetching } = useGetCryptoExchangeQuery();
  if (isFetching) {
    return "Loading";
  }

  console.log(data);

  return (
    <>
      <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Change</Col>
      </Row>
      <Col span={24}>
        <Collapse defaultActiveKey={["1"]}>
          {data?.data?.exchanges.map((coin, index) => (
            <Panel
              header={<TableElements {...coin} index={index} />}
              key={coin.id}
              showArrow={false}
            >
              {coin.description
                ? HTMLReactParser(`${coin.description}`)
                : coin.name}
            </Panel>
          ))}
        </Collapse>
      </Col>
    </>
  );
};

export default Exchanges;
