import { Add } from './add';
import { ArrowDown } from './arrow-down';
import { ArrowLeft } from './arrow-left';
import { ArrowPropertyDown, ArrowPropertyUp } from './arrowProperty';
import { Avatar } from './avatar';
import { CheckboxOn, CheckboxOff } from './checkInput';
import { EmptyUser } from './emptyUser';
import {
    Education,
    Electricity,
    Gas,
    Internet,
    Phone,
    Tv,
    Water,
} from './factureType';
import { NotificationOff, NotificationOn } from './notification';
import {
    Banking,
    Benefits,
    BillsPay,
    MessageCenter,
    FundTransfer,
    Partners,
} from './quickActions';
import { RadioInputOff, RadioInputOn } from './radioInput';
import { Search } from './search';
import { SwitchInputOff, SwitchInputOn } from './switchInput';
import { ThreeDotHorizontal, ThreeDotVertical } from './threedot';
import { Warning, WarningSmall } from './warning';
import { Transaction } from './transaction';
import { BillsPayHistory } from './bills-pay-history';
import { RecentBills } from './recent-bills';
const Icons = {
    add: Add,
    arrowLeft: ArrowLeft,
    arrowDown: ArrowDown,
    threeDotVertical: ThreeDotVertical,
    threeDotHorizontal: ThreeDotHorizontal,
    notificationOn: NotificationOn,
    notificationOff: NotificationOff,
    radioInputOn: RadioInputOn,
    radioInputOff: RadioInputOff,
    checkboxOn: CheckboxOn,
    checkboxOff: CheckboxOff,
    arrowPropertyUp: ArrowPropertyUp,
    arrowPropertyDown: ArrowPropertyDown,
    switchInputOn: SwitchInputOn,
    switchInputOff: SwitchInputOff,
    water: Water,
    electricity: Electricity,
    gas: Gas,
    internet: Internet,
    phone: Phone,
    tv: Tv,
    education: Education,
    banking: Banking,
    billsPay: BillsPay,
    messageCenter: MessageCenter,
    benefits: Benefits,
    fundTransfer: FundTransfer,
    partners: Partners,
    warning: Warning,
    warningSmall: WarningSmall,
    emptyUser: EmptyUser,
    search: Search,
    avatar: Avatar,
    transaction: Transaction,
    billsPayHistory: BillsPayHistory,
    recentBills: RecentBills,
};

export default Icons;
