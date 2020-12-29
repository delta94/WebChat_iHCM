import { IBodyConversationDetail } from "../../Body/Models/BodyConversationDetail";
import { IHeaderConversationDetail } from "../../Header/Models/HeaderConversationDetail";

export interface IConversationDetail{
    header:IHeaderConversationDetail,
    body:IBodyConversationDetail,
}
