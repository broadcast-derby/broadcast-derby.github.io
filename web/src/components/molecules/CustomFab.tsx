import React from 'react'

// mui
import Fab from '@mui/material/Fab'

/**
 * FAB用props
 */
interface CustomFabProps {
  /**
   * FAB押下時イベント
   */
  onClick: () => void,
  /**
   * 子要素(アイコン)
   */
  children: React.ReactNode,
}

/**
 * FAB
 * 
 * ゲーム画面と設定画面を行き来するためのFAB
 */
const CustomFab: React.FC<CustomFabProps> = ({
  /**
   * FAB押下時イベント
   */
  onClick,
  /**
   * 子要素(アイコン)
   */
  children,
}) => {
  return (
    <Fab
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
      }}
      onClick={onClick}
    >
      {children}
    </Fab>
  )
}

export default CustomFab
