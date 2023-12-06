import { CheckCircleOutlined, WarningOutlined } from "@ant-design/icons";
import {
  Card,
  CardHeader,
  CardBody,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";

import { AddressZero } from "@/utils/address";

import { GoPlusTokenResponse } from "./models";

interface Props {
  scanResponse: GoPlusTokenResponse;
}

export const InformationOverview: React.FC<Props> = ({ scanResponse }) => {
  const {
    owner_address,
    is_open_source,
    is_anti_whale,
    is_blacklisted,
    is_proxy,
    is_whitelisted,
    is_mintable,
    cannot_sell_all,
    trading_cooldown,
    hidden_owner,
    owner_change_balance,
    honeypot_with_same_creator,
    slippage_modifiable,
    transfer_pausable,
    can_take_back_ownership,
  } = scanResponse;

  const isRenounced = owner_address && owner_address === AddressZero;
  const isOpenSource = !!Number(is_open_source);
  const isAntiWhale = !!Number(is_anti_whale);
  const isSlippageModifiable = !!Number(slippage_modifiable);
  const isHiddenOwner = !!Number(hidden_owner);
  const isTradingCooldown = !!Number(trading_cooldown);
  const isBlacklist = !!Number(is_blacklisted);
  const isWhitelist = !!Number(is_whitelisted);
  const isProxy = !!Number(is_proxy);
  const isMintable = !!Number(is_mintable);
  const isTransferPausable = !!Number(transfer_pausable);
  const isCantSellAll = !!Number(cannot_sell_all);
  const isOwnerChangeBalance = !!Number(owner_change_balance);
  const isTakeBackOwnership = !!Number(can_take_back_ownership);
  const isSameOwnerHoneypot = !!Number(honeypot_with_same_creator);

  return (
    <Card className="w-full h-full bg-dark-secondary rounded-lg text-white">
      <CardHeader className="pb-0 font-semibold text-xl">
        Contract Review!
      </CardHeader>
      <CardBody>
        <List spacing={3}>
          <ListItem className="flex items-baseline">
            <ListIcon
              as={isRenounced ? CheckCircleOutlined : WarningOutlined}
              className={`${isRenounced ? "text-green-500" : "text-red-500"}`}
            />
            <div className="w-11/12 flex justify-between">
              <div className="w-2/5 sm:w-1/2">Renounced</div>
              <div className="w-1/4 sm:w-2/5 text-right">
                {isRenounced ? "YES" : "NO"}
              </div>
            </div>
          </ListItem>
          <ListItem className="flex items-baseline">
            <ListIcon
              as={isOpenSource ? CheckCircleOutlined : WarningOutlined}
              className={`${isOpenSource ? "text-green-500" : "text-red-500"}`}
            />
            <div className="w-11/12 flex justify-between">
              <div className="w-2/5 sm:w-1/2">Open source</div>
              <div className="w-1/4 sm:w-2/5 text-right">
                {isOpenSource ? "YES" : "NO"}
              </div>
            </div>
          </ListItem>
          <ListItem className="flex items-baseline">
            <ListIcon
              as={isAntiWhale ? CheckCircleOutlined : WarningOutlined}
              className={`${isAntiWhale ? "text-green-500" : "text-red-500"}`}
            />
            <div className="w-11/12 flex justify-between">
              <div className="w-2/5 sm:w-1/2">Is anti whale</div>
              <div className="w-1/4 sm:w-2/5 text-right">
                {isAntiWhale ? "YES" : "NO"}
              </div>
            </div>
          </ListItem>
          <ListItem className="flex items-baseline">
            <ListIcon
              as={!isSlippageModifiable ? CheckCircleOutlined : WarningOutlined}
              className={`${
                !isSlippageModifiable ? "text-green-500" : "text-red-500"
              }`}
            />
            <div className="w-11/12 flex justify-between">
              <div className="w-2/5 sm:w-1/2">Tax modifiable</div>
              <div className="w-1/4 sm:w-2/5 text-right">
                {isSlippageModifiable ? "YES" : "NO"}
              </div>
            </div>
          </ListItem>
          <ListItem className="flex items-baseline">
            <ListIcon
              as={!isHiddenOwner ? CheckCircleOutlined : WarningOutlined}
              className={`${
                !isHiddenOwner ? "text-green-500" : "text-red-500"
              }`}
            />
            <div className="w-11/12 flex justify-between">
              <div className="w-2/5 sm:w-1/2">Hidden owner</div>
              <div className="w-1/4 sm:w-2/5 text-right">
                {isHiddenOwner ? "YES" : "NO"}
              </div>
            </div>
          </ListItem>
          <ListItem className="flex items-baseline">
            <ListIcon
              as={!isTradingCooldown ? CheckCircleOutlined : WarningOutlined}
              className={`${
                !isTradingCooldown ? "text-green-500" : "text-red-500"
              }`}
            />
            <div className="w-11/12 flex justify-between">
              <div className="w-2/5 sm:w-1/2">Trading cooldown</div>
              <div className="w-1/4 sm:w-2/5 text-right">
                {isTradingCooldown ? "YES" : "NO"}
              </div>
            </div>
          </ListItem>
          <ListItem className="flex items-baseline">
            <ListIcon
              as={!isBlacklist ? CheckCircleOutlined : WarningOutlined}
              className={`${!isBlacklist ? "text-green-500" : "text-red-500"}`}
            />
            <div className="w-11/12 flex justify-between">
              <div className="w-2/5 sm:w-1/2">Has blacklist</div>
              <div className="w-1/4 sm:w-2/5 text-right">
                {isBlacklist ? "YES" : "NO"}
              </div>
            </div>
          </ListItem>
          <ListItem className="flex items-baseline">
            <ListIcon
              as={!isWhitelist ? CheckCircleOutlined : WarningOutlined}
              className={`${!isWhitelist ? "text-green-500" : "text-red-500"}`}
            />
            <div className="w-11/12 flex justify-between">
              <div className="w-2/5 sm:w-1/2">Has whitelist</div>
              <div className="w-1/4 sm:w-2/5 text-right">
                {isWhitelist ? "YES" : "NO"}
              </div>
            </div>
          </ListItem>
          <ListItem className="flex items-baseline">
            <ListIcon
              as={!isProxy ? CheckCircleOutlined : WarningOutlined}
              className={`${!isProxy ? "text-green-500" : "text-red-500"}`}
            />
            <div className="w-11/12 flex justify-between">
              <div className="w-2/5 sm:w-1/2">Proxy contract</div>
              <div className="w-1/4 sm:w-2/5 text-right">
                {isProxy ? "YES" : "NO"}
              </div>
            </div>
          </ListItem>
          <ListItem className="flex items-baseline">
            <ListIcon
              as={!isMintable ? CheckCircleOutlined : WarningOutlined}
              className={`${!isMintable ? "text-green-500" : "text-red-500"}`}
            />
            <div className="w-11/12 flex justify-between">
              <div className="w-2/5 sm:w-1/2">Mintable</div>
              <div className="w-1/4 sm:w-2/5 text-right">
                {isMintable ? "YES" : "NO"}
              </div>
            </div>
          </ListItem>
          <ListItem className="flex items-baseline">
            <ListIcon
              as={!isTransferPausable ? CheckCircleOutlined : WarningOutlined}
              className={`${
                !isTransferPausable ? "text-green-500" : "text-red-500"
              }`}
            />
            <div className="w-11/12 flex justify-between">
              <div className="w-2/5 sm:w-1/2">Transfer pausable</div>
              <div className="w-1/4 sm:w-2/5 text-right">
                {isTransferPausable ? "YES" : "NO"}
              </div>
            </div>
          </ListItem>
          <ListItem className="flex items-baseline">
            <ListIcon
              as={!isCantSellAll ? CheckCircleOutlined : WarningOutlined}
              className={`${
                !isCantSellAll ? "text-green-500" : "text-red-500"
              }`}
            />
            <div className="w-11/12 flex justify-between">
              <div className="w-2/5 sm:w-1/2">Can't sell all</div>
              <div className="w-1/4 sm:w-2/5 text-right">
                {isCantSellAll ? "YES" : "NO"}
              </div>
            </div>
          </ListItem>
          <ListItem className="flex items-baseline">
            <ListIcon
              as={!isSameOwnerHoneypot ? CheckCircleOutlined : WarningOutlined}
              className={`${
                !isSameOwnerHoneypot ? "text-green-500" : "text-red-500"
              }`}
            />
            <div className="w-11/12 flex justify-between">
              <div className="w-2/5 sm:w-1/2">Creator has honeypot</div>
              <div className="w-1/4 sm:w-2/5 text-right">
                {isSameOwnerHoneypot ? "YES" : "NO"}
              </div>
            </div>
          </ListItem>
          <ListItem className="flex items-baseline">
            <ListIcon
              as={!isOwnerChangeBalance ? CheckCircleOutlined : WarningOutlined}
              className={`${
                !isOwnerChangeBalance ? "text-green-500" : "text-red-500"
              }`}
            />
            <div className="w-11/12 flex justify-between">
              <div className="w-2/5 sm:w-1/2">Owner can change balance</div>
              <div className="w-1/4 sm:w-2/5 text-right">
                {isOwnerChangeBalance ? "YES" : "NO"}
              </div>
            </div>
          </ListItem>
          <ListItem className="flex items-baseline">
            <ListIcon
              as={isTakeBackOwnership ? WarningOutlined : CheckCircleOutlined}
              className={`${
                isTakeBackOwnership ? "text-red-500" : "text-green-500"
              }`}
            />
            <div className="w-11/12 flex justify-between">
              <div className="w-2/5 sm:w-1/2">
                Owner can take back ownership
              </div>
              <div className="w-1/4 sm:w-2/5 text-right">
                {isTakeBackOwnership ? "YES" : "NO"}
              </div>
            </div>
          </ListItem>
        </List>
      </CardBody>
    </Card>
  );
};
