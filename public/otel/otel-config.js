import { WebTracerProvider } from "https://esm.sh/@opentelemetry/sdk-trace-web";
import { OTLPTraceExporter } from "https://esm.sh/@opentelemetry/exporter-trace-otlp-http";
import { BatchSpanProcessor } from "https://esm.sh/@opentelemetry/sdk-trace-base";

const provider = new WebTracerProvider();
provider.addSpanProcessor(
  new BatchSpanProcessor(
    new OTLPTraceExporter({
      url: "http://localhost:4318/v1/traces",
    })
  )
);

provider.register();
