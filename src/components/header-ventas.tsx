import * as _React from "react";
import { Button as _Button } from "@/components/ui/button";
import { Input as _Input } from "@/components/ui/input";
import { Label as _Label } from "@/components/ui/label";
import { type HeaderVentasProps } from "./header-ventas.logic";
export type { HeaderVentasProps } from "./header-ventas.logic";
export function HeaderVentas(_props: HeaderVentasProps) {
  const _scope = _React.useId();

  return (
    <div
      className={
        "flex min-w-0 flex-row flex-wrap items-start justify-start gap-1 p-2 w-fit max-w-full overflow-visible"
      }
    >
      <div
        className={
          "flex min-w-0 flex-row flex-wrap items-start justify-between gap-4 p-2 w-full min-w-0 overflow-visible"
        }
      >
        <div
          className={
            "flex min-w-0 flex-row flex-wrap items-stretch justify-start gap-4 p-0 w-fit max-w-full overflow-visible"
          }
        >
          <div
            className={
              "flex min-w-0 flex-col items-stretch justify-start gap-4 p-0 w-fit max-w-full overflow-visible"
            }
          >
            <div className="grid w-full min-w-0 gap-2">
              <_Label htmlFor={_scope + "-field-0"}>{"Tipo de factura"}</_Label>
              <select
                id={_scope + "-field-0"}
                name={"TipoFactura"}
                className={
                  "flex h-10 w-full min-w-0 rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
                }
                defaultValue=""
                required={false}
                disabled={false}
              >
                <option value="">{"Seleccionar"}</option>
                <option value={"option_2"}>{"Option 2"}</option>
                <option value={"option_3"}>{"Option 3"}</option>
              </select>
            </div>
          </div>
          <div
            className={
              "flex min-w-0 flex-col items-start justify-start gap-0 p-0 w-fit max-w-full overflow-visible"
            }
          >
            <p className={"min-w-0 break-words text-sm font-bold"}>
              {"Datos del documento"}
            </p>
            <div
              className={
                "flex min-w-0 flex-row flex-wrap items-start justify-start gap-4 p-0 w-fit max-w-full overflow-visible"
              }
            >
              <p className={"min-w-0 break-words text-sm font-normal"}>
                {(Object.prototype.hasOwnProperty.call(_props, "Prefijo")
                  ? _props["Prefijo"]
                  : undefined) ?? "Prefijo"}
              </p>
              <p className={"min-w-0 break-words text-sm font-normal"}>
                {(Object.prototype.hasOwnProperty.call(_props, "Numero")
                  ? _props["Numero"]
                  : undefined) ?? "Número"}
              </p>
            </div>
          </div>
        </div>
        <div
          className={
            "flex min-w-0 flex-row flex-wrap items-stretch justify-start gap-1 p-0 w-fit max-w-full overflow-visible"
          }
        >
          <div
            className={
              "flex min-w-0 flex-col items-stretch justify-start gap-4 p-0 w-fit max-w-full overflow-visible"
            }
          >
            <div className="grid w-full min-w-0 gap-2">
              <_Label htmlFor={_scope + "-field-1"}>{"Observaciones"}</_Label>
              <_Input
                id={_scope + "-field-1"}
                name={"NotasObservaciones"}
                type={"text"}
                placeholder={"Agregar notas aquí"}
                required={false}
                disabled={false}
              />
            </div>
          </div>
          <div
            className={
              "flex min-w-0 flex-col items-stretch justify-start gap-0 p-0 w-fit max-w-full overflow-visible"
            }
          >
            <div className="grid w-full min-w-0 gap-2">
              <_Label htmlFor={_scope + "-field-2"}>
                {"Orden de referencia"}
              </_Label>
              <_Input
                id={_scope + "-field-2"}
                name={"OrderRef"}
                type={"text"}
                placeholder={"Número"}
                required={false}
                disabled={false}
              />
            </div>
            <div className="grid w-full min-w-0 gap-2">
              <_Label htmlFor={_scope + "-field-3"}>{""}</_Label>
              <_Input
                id={_scope + "-field-3"}
                name={"FechaOrdenRef"}
                type={"text"}
                placeholder={"Fecha"}
                required={false}
                disabled={false}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          "flex min-w-0 flex-row flex-wrap items-stretch justify-between gap-4 p-2 w-full min-w-0 overflow-visible"
        }
      >
        <div
          className={
            "flex min-w-0 flex-col items-stretch justify-end gap-0 p-0 w-fit max-w-full overflow-visible"
          }
        >
          <div className="grid w-full min-w-0 gap-2">
            <_Label htmlFor={_scope + "-field-4"}>
              {"Documento de identidad"}
            </_Label>
            <select
              id={_scope + "-field-4"}
              name={"Documento"}
              className={
                "flex h-10 w-full min-w-0 rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
              }
              defaultValue=""
              required={false}
              disabled={false}
            >
              <option value="">{"Seleccionar"}</option>
              <option value={"option_1"}>{"Option 1"}</option>
              <option value={"option_2"}>{"Option 2"}</option>
            </select>
          </div>
          <div className="grid w-full min-w-0 gap-2">
            <_Label htmlFor={_scope + "-field-5"}>{""}</_Label>
            <_Input
              id={_scope + "-field-5"}
              name={"NumDocumentoIdentidad"}
              type={"text"}
              placeholder={"Número"}
              required={false}
              disabled={false}
            />
          </div>
        </div>
        <div
          className={
            "flex min-w-0 flex-row flex-wrap items-stretch justify-start gap-1 p-0 w-fit max-w-full overflow-visible"
          }
        >
          <div
            className={
              "flex min-w-0 flex-col items-stretch justify-end gap-0 p-0 w-fit max-w-full overflow-visible"
            }
          >
            <div className="grid w-full min-w-0 gap-2">
              <_Label htmlFor={_scope + "-field-6"}>
                {"Información del cliente"}
              </_Label>
              <_Input
                id={_scope + "-field-6"}
                name={"Nombre"}
                type={"text"}
                placeholder={"Nombre"}
                required={false}
                disabled={false}
              />
            </div>
            <div className="grid w-full min-w-0 gap-2">
              <_Label htmlFor={_scope + "-field-7"}>{""}</_Label>
              <_Input
                id={_scope + "-field-7"}
                name={"Apellido"}
                type={"text"}
                placeholder={"Apellido"}
                required={false}
                disabled={false}
              />
            </div>
          </div>
          <div
            className={
              "flex min-w-0 flex-col items-stretch justify-end gap-0 p-0 w-fit max-w-full overflow-visible"
            }
          >
            <div className="grid w-full min-w-0 gap-2">
              <_Label htmlFor={_scope + "-field-8"}>{""}</_Label>
              <_Input
                id={_scope + "-field-8"}
                name={"email"}
                type={"email"}
                placeholder={"Correo electrónico"}
                required={false}
                disabled={false}
              />
            </div>
            <div className="grid w-full min-w-0 gap-2">
              <_Label htmlFor={_scope + "-field-9"}>{""}</_Label>
              <_Input
                id={_scope + "-field-9"}
                name={"telefono"}
                type={"text"}
                placeholder={"Teléfono"}
                required={false}
                disabled={false}
              />
            </div>
          </div>
        </div>
        <div
          className={
            "flex min-w-0 flex-col items-start justify-center gap-0 p-0 w-fit max-w-full overflow-visible"
          }
        >
          <p className={"min-w-0 break-words text-sm font-bold"}>
            {"Razón Social"}
          </p>
          <p className={"min-w-0 break-words text-sm font-normal"}>
            {(Object.prototype.hasOwnProperty.call(_props, "RazonSocial")
              ? _props["RazonSocial"]
              : undefined) ?? "N/A"}
          </p>
        </div>
        <div
          className={
            "flex min-w-0 flex-col items-start justify-end gap-2 p-0 w-fit max-w-full overflow-visible"
          }
        >
          <_Button
            type={"button"}
            variant={"secondary"}
            size={"default"}
            className={"w-full min-w-0"}
            disabled={false}
            onClick={() => _props["editar"]()}
          >
            {"Editar"}
          </_Button>
          <_Button
            type={"button"}
            variant={"default"}
            size={"default"}
            className={"w-full min-w-0"}
            disabled={false}
            onClick={() => _props["buscar"]()}
          >
            {"Buscar"}
          </_Button>
        </div>
      </div>
    </div>
  );
}
