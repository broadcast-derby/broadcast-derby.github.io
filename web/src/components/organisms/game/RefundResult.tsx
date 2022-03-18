import React from 'react'
import { useSelector } from 'react-redux'

// mui
import Container from '@mui/material/Container'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

// utils
import {
  FORMULAS,
} from 'const'
import {
  Ticket,
  User,
} from 'interface'

/**
 * 払戻金結果画面
 */
const RefundResult: React.FC = () => {
  /**
   * ユーザ情報
   */
  const users: User[] = useSelector((state: any) => state.userReducer.users)
  return (
    <Container maxWidth="md">
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>サービス名</TableCell>
              <TableCell>ユーザ名</TableCell>
              <TableCell align="right">式別</TableCell>
              <TableCell align="right">魚券</TableCell>
              <TableCell align="right">購入金額</TableCell>
              <TableCell align="right">払い戻し金額</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((u: User) => u.boughtTickets.map((ticket: Ticket) => (
              <TableRow>
                <TableCell component="th" scope="row">{u.service}</TableCell>
                <TableCell>{u.name}</TableCell>
                <TableCell>{FORMULAS[ticket.formula].name}</TableCell>
                <TableCell>
                  {ticket.racehorses.reduce<string>(
                    (str: string, num: number, index: number) => str + num + (index === ticket.racehorses.length - 1 ? '' : '-'),
                    ''
                  )}
                </TableCell>
                <TableCell align="right">{ticket.money.toLocaleString()}</TableCell>
                <TableCell align="right">{ticket.refund.toLocaleString()}</TableCell>
              </TableRow>
            )))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default RefundResult
