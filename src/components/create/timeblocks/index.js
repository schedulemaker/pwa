import React, { useState } from "react";
import { connect } from "react-redux";
import TimeBlock from "./timeblock";
import { 
    Typography, 
    Collapse, 
    Button, 
    Row, 
    Col 
} from "antd";
import { DeleteTwoTone, PlusOutlined } from "@ant-design/icons";

const { Paragraph } = Typography;
const { Panel } = Collapse;

function mapStateToProps(state){
    return {
        blocks: state.timeblocks.blocks
    }
}

function TimeBlocks(props) {
    const {blocks} = props;

    const handleDelete = (event, key) => {
        event.stopPropagation();
        props.dispatch({type: 'DELETE_TIMEBLOCK', key: key});
      };
  const [editableStr, setEditableStr] = useState("Timeblock 1");

  const genExtra = (key) => (
    <DeleteTwoTone onClick={(event) => handleDelete(event, key)} key={key} twoToneColor="red" />
  );

  const genHeader = (name) => (
    <Paragraph
      editable={{ onChange: setEditableStr }}
      onClick={(event) => event.stopPropagation()}
      onKeyPress={(event) => event.stopPropagation()}
    >
      {name}
    </Paragraph>
  );

  const addTimeBlock = () => {
      props.dispatch({type: 'ADD_TIMEBLOCK'});
  }
  return (
    <div>
      <Row style={{textAlign: "center"}} gutter={[16,16]}>
      <Col span={24}>
      <Button type="primary" size="large" onClick={addTimeBlock} icon={<PlusOutlined />}>
        Add Time Block
      </Button>
      </Col>
      </Row>
      <Row style={{textAlign: "center"}} gutter={[16,16]}>
      <Col span={24}>
      <Collapse accordion>
        {Object.keys(blocks).map(key => {
            return (
                <Panel header={genHeader(blocks[key].name)} key={key} extra={genExtra(key)}>
          <TimeBlock key={key}/>
        </Panel>
            );
        })}
      </Collapse>
      </Col>
      </Row>
    </div>
  );
}

export default connect(mapStateToProps)(TimeBlocks);
