import * as React from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Input, DatePicker, Form } from 'antd'
import dayjs from 'dayjs'
import { FormComponentProps } from 'antd/lib/form'

const routes = require('../constants/routes.json')
const styles = require('./Home.css')

type Props = {} & FormComponentProps<{ testing: string }>

class Home extends Component<Props> {
  props: Props

  render() {
    const { getFieldDecorator } = this.props.form

    return (
      <div className={styles.container} data-tid="container">
        <h2>Home</h2>
        <Link to={routes.COUNTER}>to Counter</Link>
        <br />
        <Button type="primary">Antd is Work</Button>
        <br />
        <Input />

        <Form>
          <Form.Item>
            {getFieldDecorator('testing', {
              initialValue: dayjs('2000-01-01').format('DD/MM/YYYY'),
            })(<DatePicker />)}
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default Form.create({ name: 'form' })(Home)
