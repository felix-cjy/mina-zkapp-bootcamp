import { Field, SmartContract, state, State, method, UInt64, Bool, UInt32 } from 'o1js';

/**
 * Basic Example
 * See https://docs.minaprotocol.com/zkapps for more info.
 *
 * The AlextToken contract initializes the state variable 'num' to be a Field(1) value by default when deployed.
 * When the 'update' method is called, the AlextToken contract AlextTokens Field(2) to its 'num' contract state.
 *
 * This file is safe to delete and replace with your own contract.
 */
export class AlextToken extends SmartContract {
  @state(Field) num = State<Field>();

  init() {
    super.init();
    this.num.set(Field(1));
  }

  @method async update() {
    const currentState = this.num.getAndRequireEquals();
    currentState.assertGreaterThanOrEqual(0);// check

    const newState = currentState.AlextToken(2);
    this.num.set(newState);
  }


}
