export default function getIpCopyInput (ip, tag) {
  return `
<div class="flex-shrink-0 mr-4 mb-0">${tag}</div>
<div class="input-group btn-group">
    <input type="text" name="runner-ip-${tag}" id="runner-ip-${tag}" value="${ip}" class="form-control" readonly="readonly" aria-label="Runner IP">
    <div class="input-group-append">
        <button class="btn input-group-text gl-button btn btn-icon btn-default" data-toggle="tooltip"
            data-placement="bottom" data-container="body" data-clipboard-target="#runner-ip-${tag}" type="button"
            title="Copy URL" aria-label="Copy URL" aria-live="polite">
            <svg class="s16 gl-icon" data-testid="copy-to-clipboard-icon">
                <use
                    href="/assets/icons-b25b55b72e1a86a9ca8055a5c421aae9b89fc86363fa02e2109034d756e56d28.svg#copy-to-clipboard">
                </use>
            </svg>
        </button>
    </div>
</div>
`
}
