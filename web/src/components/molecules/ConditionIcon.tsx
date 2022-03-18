import React from 'react'

// mui icon
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined'
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied'

/**
 * 調子アイコンProps
 */
 interface ConditionIconProps {
  /**
   * 値
   */
  value: number,
}
/**
 * 調子アイコン
 */
const ConditionIcon: React.FC<ConditionIconProps> = ({
  /**
   * 値
   */
  value,
}) => {
  // 最悪
  if (0 <= value && value < 1) {
    return (<SentimentVeryDissatisfiedIcon sx={{ color: "#440044" }} />)
  }
  // 無理め
  else if (1 <= value && value < 2) {
    return (<SentimentDissatisfiedIcon sx={{ color: "#6666ff" }} />)
  }
  // 普通
  else if (2 <= value && value < 3) {
    return (<SentimentSatisfiedIcon sx={{ color: "#cccc00" }} />)
  }
  // よき
  else if (3 <= value && value <= 4) {
    return (<SentimentSatisfiedAltIcon sx={{ color: "#ff0000" }} />)
  }
  // ﾁｮｰｲｲﾈ
  else {
    return (<SentimentVerySatisfiedIcon sx={{ color: "#ff00ff" }} />)
  }
}
export default ConditionIcon