import {IToken} from "./i-token";
import Layer1Parser from "../parsers/layer-1-parser";
import Layer2Parser from "../parsers/layer-2-parser";
import Layer3Parser from "../parsers/layer-3-parser";
import ResolverParser from "../parsers/resolver-parser";
import IPart from "@drewsonne/maya-dates/lib/i-part";


export default class TokenCollection {
  public tokens: IToken[]

  constructor(tokens: IToken[]) {
    this.tokens = tokens
  }

  get length(): number {
    return this.tokens.length
  }

  toString(): string {
    return this.tokens.join(', ')
  }

  index(i: number): IToken {
    return this.tokens[i]
  }

  processLayer1(): TokenCollection {
    return new Layer1Parser().parse(this)
  }

  processLayer2(): TokenCollection {
    return new Layer2Parser().parse(this)
  }

  processLayer3(): TokenCollection {
    return new Layer3Parser().parse(this)
  }

  resolver(): IPart[] {
    return new ResolverParser().parse(this)
  }
}
