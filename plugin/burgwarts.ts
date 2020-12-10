import * as ts from "typescript";
import * as tstl from "typescript-to-lua";
import { isStringLiteral } from "typescript-to-lua";

function checkPropertyCallName(expression: tstl.TableFieldExpression, property: string, functionName: string) {
    if(!expression.key) {
        return true;
    }

    if(!isStringLiteral(expression.key)) {
        return true;
    }

    if(expression.key.value !== property) {
        return true;
    }

    if(!tstl.isCallExpression(expression.value)) {
        return true;
    }

    if(!tstl.isIdentifier(expression.value.expression)) {
        return true;
    }

    if(expression.value.expression.text !== functionName) {
        return true;
    }

    return false;
}

const plugin: tstl.Plugin = {
    // `visitors` is a record where keys are TypeScript node syntax kinds
    visitors: {
        // Visitor can be a function that returns Lua AST node
        [ts.SyntaxKind.ObjectLiteralExpression]: (node, context) => {
            const result = context.superTransformExpression(node);
            if(tstl.isTableExpression(result)) {
                result.fields = result.fields.filter(item => {
                    return checkPropertyCallName(item, 'TsStructure', 'TsStructure') &&
                           checkPropertyCallName(item, 'TsBase', 'TsBase');
                })
            }

            return result;
        },
    },
};

export default plugin;
